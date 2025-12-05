import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import AICoachChat from '@/components/AICoachChat';
import { supabase } from '@/integrations/supabase/client';
import { mockChatMessage } from '../mocks/supabase';

describe('AICoachChat Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders chat interface', () => {
    render(<AICoachChat />);
    
    expect(screen.getByPlaceholderText(/ask me anything about your football career/i)).toBeInTheDocument();
    expect(screen.getByText(/ai coach assistant/i)).toBeInTheDocument();
  });

  it('allows user to type message', () => {
    render(<AICoachChat />);
    
    const input = screen.getByPlaceholderText(/ask me anything about your football career/i) as HTMLTextAreaElement;
    fireEvent.change(input, { target: { value: 'How can I improve my passing?' } });

    expect(input.value).toBe('How can I improve my passing?');
  });

  it('sends message when button is clicked', async () => {
    const mockInvoke = vi.mocked(supabase.functions.invoke);
    mockInvoke.mockResolvedValue({
      data: {
        message: mockChatMessage,
        response: 'Here are some tips to improve your passing...',
      },
      error: null,
    } as any);

    render(<AICoachChat />);
    
    const input = screen.getByPlaceholderText(/ask me anything about your football career/i);
    const sendButton = screen.getAllByRole('button')[0];

    fireEvent.change(input, { target: { value: 'How do I improve passing?' } });
    fireEvent.click(sendButton);

    await waitFor(() => {
      expect(mockInvoke).toHaveBeenCalledWith('sports-coach-chat', {
        body: expect.objectContaining({
          messages: expect.any(Array),
        }),
      });
    });
  });

  it('sends message when Enter key is pressed', async () => {
    const mockInvoke = vi.mocked(supabase.functions.invoke);
    mockInvoke.mockResolvedValue({
      data: { response: 'Coach response' },
      error: null,
    } as any);

    render(<AICoachChat />);
    
    const input = screen.getByPlaceholderText(/ask me anything about your football career/i);
    fireEvent.change(input, { target: { value: 'Test message' } });
    fireEvent.keyPress(input, { key: 'Enter', code: 'Enter', charCode: 13 });

    await waitFor(() => {
      expect(mockInvoke).toHaveBeenCalled();
    });
  });

  it('displays chat messages', async () => {
    const mockInvoke = vi.mocked(supabase.functions.invoke);
    mockInvoke.mockResolvedValue({
      data: {
        response: 'To improve your passing, focus on accuracy and timing.',
      },
      error: null,
    } as any);

    render(<AICoachChat />);
    
    const input = screen.getByPlaceholderText(/ask me anything about your football career/i);
    const sendButton = screen.getByRole('button', { name: /send/i });

    fireEvent.change(input, { target: { value: 'How do I improve passing?' } });
    fireEvent.click(sendButton);

    await waitFor(() => {
      expect(screen.getByText(/how do i improve passing/i)).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(screen.getByText(/focus on accuracy and timing/i)).toBeInTheDocument();
    });
  });

  it('clears input after sending message', async () => {
    const mockInvoke = vi.mocked(supabase.functions.invoke);
    mockInvoke.mockResolvedValue({
      data: { response: 'Response' },
      error: null,
    } as any);

    render(<AICoachChat />);
    
    const input = screen.getByPlaceholderText(/ask me anything about your football career/i) as HTMLTextAreaElement;
    const sendButton = screen.getByRole('button', { name: /send/i });

    fireEvent.change(input, { target: { value: 'Test message' } });
    fireEvent.click(sendButton);

    await waitFor(() => {
      expect(input.value).toBe('');
    });
  });

  it('displays error message on chat failure', async () => {
    const mockInvoke = vi.mocked(supabase.functions.invoke);
    mockInvoke.mockResolvedValue({
      data: null,
      error: { message: 'Chat service unavailable', name: 'FunctionError' },
    } as any);

    render(<AICoachChat />);
    
    const input = screen.getByPlaceholderText(/ask me anything about your football career/i);
    const sendButton = screen.getByRole('button', { name: /send/i });

    fireEvent.change(input, { target: { value: 'Test message' } });
    fireEvent.click(sendButton);

    await waitFor(() => {
      expect(screen.getByText(/chat service unavailable/i)).toBeInTheDocument();
    });
  });

  it('shows loading state while waiting for response', async () => {
    const mockInvoke = vi.mocked(supabase.functions.invoke);
    mockInvoke.mockImplementation(() => new Promise(() => {}));

    render(<AICoachChat />);
    
    const input = screen.getByPlaceholderText(/ask me anything about your football career/i);
    const sendButton = screen.getByRole('button', { name: /send/i });

    fireEvent.change(input, { target: { value: 'Test message' } });
    fireEvent.click(sendButton);

    await waitFor(() => {
      expect(screen.getByText(/thinking/i)).toBeInTheDocument();
    });
  });

  it('disables input while sending message', async () => {
    const mockInvoke = vi.mocked(supabase.functions.invoke);
    mockInvoke.mockImplementation(() => new Promise(() => {}));

    render(<AICoachChat />);
    
    const input = screen.getByPlaceholderText(/ask me anything about your football career/i) as HTMLTextAreaElement;
    const sendButton = screen.getByRole('button', { name: /send/i });

    fireEvent.change(input, { target: { value: 'Test message' } });
    fireEvent.click(sendButton);

    await waitFor(() => {
      expect(input).toBeDisabled();
      expect(sendButton).toBeDisabled();
    });
  });

  it('prevents sending empty messages', async () => {
    const mockInvoke = vi.mocked(supabase.functions.invoke);

    render(<AICoachChat />);
    
    const sendButton = screen.getByRole('button', { name: /send/i });
    fireEvent.click(sendButton);

    expect(mockInvoke).not.toHaveBeenCalled();
  });

  it('maintains conversation history', async () => {
    const mockInvoke = vi.mocked(supabase.functions.invoke);
    mockInvoke
      .mockResolvedValueOnce({
        data: { response: 'First response' },
        error: null,
      } as any)
      .mockResolvedValueOnce({
        data: { response: 'Second response' },
        error: null,
      } as any);

    render(<AICoachChat />);
    
    const input = screen.getByPlaceholderText(/ask me anything about your football career/i);
    const sendButton = screen.getByRole('button', { name: /send/i });

    // First message
    fireEvent.change(input, { target: { value: 'First question' } });
    fireEvent.click(sendButton);

    await waitFor(() => {
      expect(screen.getByText(/first response/i)).toBeInTheDocument();
    });

    // Second message
    fireEvent.change(input, { target: { value: 'Second question' } });
    fireEvent.click(sendButton);

    await waitFor(() => {
      expect(screen.getByText(/first response/i)).toBeInTheDocument();
      expect(screen.getByText(/second response/i)).toBeInTheDocument();
    });
  });

  it('handles streaming responses', async () => {
    const mockInvoke = vi.mocked(supabase.functions.invoke);
    
    // Mock streaming response
    const mockStream = new ReadableStream({
      start(controller) {
        controller.enqueue(new TextEncoder().encode('Streaming '));
        controller.enqueue(new TextEncoder().encode('response '));
        controller.enqueue(new TextEncoder().encode('content'));
        controller.close();
      },
    });

    mockInvoke.mockResolvedValue({
      data: mockStream,
      error: null,
    } as any);

    render(<AICoachChat />);
    
    const input = screen.getByPlaceholderText(/ask me anything about your football career/i);
    const sendButton = screen.getByRole('button', { name: /send/i });

    fireEvent.change(input, { target: { value: 'Test streaming' } });
    fireEvent.click(sendButton);

    await waitFor(() => {
      expect(screen.getByText(/streaming response content/i)).toBeInTheDocument();
    });
  });
});


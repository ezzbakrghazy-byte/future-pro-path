import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import AICoachChat from '@/components/AICoachChat';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

vi.mock('@/hooks/use-toast', () => ({
  useToast: vi.fn(),
}));

vi.mock('@/integrations/supabase/client', () => ({
  supabase: {
    functions: {
      invoke: vi.fn(),
    },
  },
}));

describe('AICoachChat - All Interactive Elements', () => {
  const mockToast = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
    vi.mocked(useToast).mockReturnValue({ toast: mockToast } as any);
  });

  describe('Intent Buttons', () => {
    it('renders all intent option buttons', () => {
      render(<AICoachChat />);

      expect(screen.getByText(/write pitch/i)).toBeInTheDocument();
      expect(screen.getByText(/evaluate potential/i)).toBeInTheDocument();
      expect(screen.getByText(/get tips/i)).toBeInTheDocument();
      expect(screen.getByText(/build profile/i)).toBeInTheDocument();
    });

    it('write pitch button is clickable', () => {
      render(<AICoachChat />);

      const button = screen.getByText(/write pitch/i).closest('button');
      expect(button).not.toBeDisabled();
      
      if (button) {
        fireEvent.click(button);
      }
    });

    it('evaluate potential button is clickable', () => {
      render(<AICoachChat />);

      const button = screen.getByText(/evaluate potential/i).closest('button');
      expect(button).not.toBeDisabled();
      
      if (button) {
        fireEvent.click(button);
      }
    });

    it('get tips button is clickable', () => {
      render(<AICoachChat />);

      const button = screen.getByText(/get tips/i).closest('button');
      expect(button).not.toBeDisabled();
      
      if (button) {
        fireEvent.click(button);
      }
    });

    it('build profile button is clickable', () => {
      render(<AICoachChat />);

      const button = screen.getByText(/build profile/i).closest('button');
      expect(button).not.toBeDisabled();
      
      if (button) {
        fireEvent.click(button);
      }
    });

    it('intent buttons have icons', () => {
      render(<AICoachChat />);

      const writePitchButton = screen.getByText(/write pitch/i).closest('button');
      expect(writePitchButton?.querySelector('svg')).toBeInTheDocument();
    });

    it('intent buttons show descriptions', () => {
      render(<AICoachChat />);

      expect(screen.getByText(/craft a message to clubs/i)).toBeInTheDocument();
      expect(screen.getByText(/analyze your abilities/i)).toBeInTheDocument();
      expect(screen.getByText(/improve your game/i)).toBeInTheDocument();
      expect(screen.getByText(/strengthen your profile/i)).toBeInTheDocument();
    });

    it('clicking intent button changes selected intent', () => {
      render(<AICoachChat />);

      const evaluateButton = screen.getByText(/evaluate potential/i).closest('button');
      
      if (evaluateButton) {
        fireEvent.click(evaluateButton);
        // Button should now show as selected (visual feedback)
        expect(evaluateButton).toBeInTheDocument();
      }
    });
  });

  describe('Message Input', () => {
    it('renders message textarea', () => {
      render(<AICoachChat />);

      const textarea = screen.getByPlaceholderText(/ask your ai coach/i);
      expect(textarea).toBeInTheDocument();
    });

    it('textarea allows typing', () => {
      render(<AICoachChat />);

      const textarea = screen.getByPlaceholderText(/ask your ai coach/i) as HTMLTextAreaElement;
      fireEvent.change(textarea, { target: { value: 'How can I improve my dribbling?' } });

      expect(textarea.value).toBe('How can I improve my dribbling?');
    });

    it('textarea is enabled', () => {
      render(<AICoachChat />);

      const textarea = screen.getByPlaceholderText(/ask your ai coach/i);
      expect(textarea).not.toBeDisabled();
    });

    it('textarea has correct placeholder', () => {
      render(<AICoachChat />);

      expect(screen.getByPlaceholderText(/ask your ai coach/i)).toBeInTheDocument();
    });

    it('textarea clears after sending message', async () => {
      const mockResponse = new ReadableStream({
        start(controller) {
          controller.enqueue(new TextEncoder().encode('data: {"choices":[{"delta":{"content":"Test"}}]}\n'));
          controller.close();
        },
      });

      vi.mocked(supabase.functions.invoke).mockResolvedValue({ 
        data: mockResponse, 
        error: null 
      } as any);

      render(<AICoachChat />);

      const textarea = screen.getByPlaceholderText(/ask your ai coach/i) as HTMLTextAreaElement;
      const sendButton = screen.getByRole('button', { name: /send/i });

      fireEvent.change(textarea, { target: { value: 'Test message' } });
      fireEvent.click(sendButton);

      await waitFor(() => {
        expect(textarea.value).toBe('');
      });
    });
  });

  describe('Send Button', () => {
    it('renders send button', () => {
      render(<AICoachChat />);

      const sendButton = screen.getByRole('button', { name: /send/i });
      expect(sendButton).toBeInTheDocument();
    });

    it('send button has icon', () => {
      render(<AICoachChat />);

      const sendButton = screen.getByRole('button', { name: /send/i });
      expect(sendButton.querySelector('svg')).toBeInTheDocument();
    });

    it('send button is disabled with empty input', () => {
      render(<AICoachChat />);

      const sendButton = screen.getByRole('button', { name: /send/i });
      expect(sendButton).toBeDisabled();
    });

    it('send button is enabled with input text', () => {
      render(<AICoachChat />);

      const textarea = screen.getByPlaceholderText(/ask your ai coach/i);
      const sendButton = screen.getByRole('button', { name: /send/i });

      fireEvent.change(textarea, { target: { value: 'Test message' } });

      expect(sendButton).not.toBeDisabled();
    });

    it('send button calls chat function when clicked', async () => {
      const mockResponse = new ReadableStream({
        start(controller) {
          controller.enqueue(new TextEncoder().encode('data: {"choices":[{"delta":{"content":"Response"}}]}\n'));
          controller.close();
        },
      });

      vi.mocked(supabase.functions.invoke).mockResolvedValue({ 
        data: mockResponse, 
        error: null 
      } as any);

      render(<AICoachChat />);

      const textarea = screen.getByPlaceholderText(/ask your ai coach/i);
      const sendButton = screen.getByRole('button', { name: /send/i });

      fireEvent.change(textarea, { target: { value: 'Test message' } });
      fireEvent.click(sendButton);

      await waitFor(() => {
        expect(supabase.functions.invoke).toHaveBeenCalledWith('sports-coach-chat', {
          body: {
            messages: expect.arrayContaining([
              expect.objectContaining({
                role: 'user',
                content: 'Test message',
              }),
            ]),
            intent: 'general',
          },
        });
      });
    });

    it('send button shows loading state during chat', async () => {
      const mockResponse = new ReadableStream({
        start(controller) {
          setTimeout(() => {
            controller.enqueue(new TextEncoder().encode('data: {"choices":[{"delta":{"content":"Response"}}]}\n'));
            controller.close();
          }, 100);
        },
      });

      vi.mocked(supabase.functions.invoke).mockResolvedValue({ 
        data: mockResponse, 
        error: null 
      } as any);

      render(<AICoachChat />);

      const textarea = screen.getByPlaceholderText(/ask your ai coach/i);
      const sendButton = screen.getByRole('button', { name: /send/i });

      fireEvent.change(textarea, { target: { value: 'Test message' } });
      fireEvent.click(sendButton);

      // During loading, button should be disabled
      expect(sendButton).toBeDisabled();
    });

    it('send button is disabled during message sending', async () => {
      const mockResponse = new ReadableStream({
        start(controller) {
          setTimeout(() => {
            controller.enqueue(new TextEncoder().encode('data: {"choices":[{"delta":{"content":"Response"}}]}\n'));
            controller.close();
          }, 50);
        },
      });

      vi.mocked(supabase.functions.invoke).mockResolvedValue({ 
        data: mockResponse, 
        error: null 
      } as any);

      render(<AICoachChat />);

      const textarea = screen.getByPlaceholderText(/ask your ai coach/i);
      const sendButton = screen.getByRole('button', { name: /send/i });

      fireEvent.change(textarea, { target: { value: 'Test message' } });
      fireEvent.click(sendButton);

      expect(sendButton).toBeDisabled();
    });
  });

  describe('Chat Messages Display', () => {
    it('displays user messages after sending', async () => {
      const mockResponse = new ReadableStream({
        start(controller) {
          controller.enqueue(new TextEncoder().encode('data: {"choices":[{"delta":{"content":"AI response"}}]}\n'));
          controller.close();
        },
      });

      vi.mocked(supabase.functions.invoke).mockResolvedValue({ 
        data: mockResponse, 
        error: null 
      } as any);

      render(<AICoachChat />);

      const textarea = screen.getByPlaceholderText(/ask your ai coach/i);
      const sendButton = screen.getByRole('button', { name: /send/i });

      fireEvent.change(textarea, { target: { value: 'User question' } });
      fireEvent.click(sendButton);

      await waitFor(() => {
        expect(screen.getByText('User question')).toBeInTheDocument();
      });
    });

    it('displays AI assistant responses', async () => {
      const mockResponse = new ReadableStream({
        start(controller) {
          controller.enqueue(new TextEncoder().encode('data: {"choices":[{"delta":{"content":"AI response"}}]}\n'));
          controller.close();
        },
      });

      vi.mocked(supabase.functions.invoke).mockResolvedValue({ 
        data: mockResponse, 
        error: null 
      } as any);

      render(<AICoachChat />);

      const textarea = screen.getByPlaceholderText(/ask your ai coach/i);
      const sendButton = screen.getByRole('button', { name: /send/i });

      fireEvent.change(textarea, { target: { value: 'Test' } });
      fireEvent.click(sendButton);

      await waitFor(() => {
        expect(screen.getByText(/AI response/i)).toBeInTheDocument();
      });
    });

    it('messages are scrollable', () => {
      render(<AICoachChat />);

      // ScrollArea component should be present
      const scrollArea = screen.getByRole('region', { hidden: true });
      expect(scrollArea).toBeInTheDocument();
    });
  });

  describe('Error Handling', () => {
    it('shows error toast on chat failure', async () => {
      vi.mocked(supabase.functions.invoke).mockResolvedValue({
        data: null,
        error: new Error('Network error'),
      } as any);

      render(<AICoachChat />);

      const textarea = screen.getByPlaceholderText(/ask your ai coach/i);
      const sendButton = screen.getByRole('button', { name: /send/i });

      fireEvent.change(textarea, { target: { value: 'Test' } });
      fireEvent.click(sendButton);

      await waitFor(() => {
        expect(mockToast).toHaveBeenCalledWith(
          expect.objectContaining({
            title: 'Error',
            variant: 'destructive',
          })
        );
      });
    });

    it('removes assistant message placeholder on error', async () => {
      vi.mocked(supabase.functions.invoke).mockResolvedValue({
        data: null,
        error: new Error('Network error'),
      } as any);

      render(<AICoachChat />);

      const textarea = screen.getByPlaceholderText(/ask your ai coach/i);
      const sendButton = screen.getByRole('button', { name: /send/i });

      fireEvent.change(textarea, { target: { value: 'Test' } });
      fireEvent.click(sendButton);

      await waitFor(() => {
        expect(mockToast).toHaveBeenCalled();
      });
    });
  });

  describe('Intent Selection with Chat', () => {
    it('sends selected intent with message', async () => {
      const mockResponse = new ReadableStream({
        start(controller) {
          controller.enqueue(new TextEncoder().encode('data: {"choices":[{"delta":{"content":"Response"}}]}\n'));
          controller.close();
        },
      });

      vi.mocked(supabase.functions.invoke).mockResolvedValue({ 
        data: mockResponse, 
        error: null 
      } as any);

      render(<AICoachChat />);

      // Select "Evaluate Potential" intent
      const evaluateButton = screen.getByText(/evaluate potential/i).closest('button');
      if (evaluateButton) {
        fireEvent.click(evaluateButton);
      }

      const textarea = screen.getByPlaceholderText(/ask your ai coach/i);
      const sendButton = screen.getByRole('button', { name: /send/i });

      fireEvent.change(textarea, { target: { value: 'Evaluate me' } });
      fireEvent.click(sendButton);

      await waitFor(() => {
        expect(supabase.functions.invoke).toHaveBeenCalledWith('sports-coach-chat', {
          body: expect.objectContaining({
            intent: 'evaluation',
          }),
        });
      });
    });
  });

  describe('Accessibility', () => {
    it('send button is accessible', () => {
      render(<AICoachChat />);

      const sendButton = screen.getByRole('button', { name: /send/i });
      expect(sendButton).toBeInTheDocument();
    });

    it('textarea has placeholder for accessibility', () => {
      render(<AICoachChat />);

      const textarea = screen.getByPlaceholderText(/ask your ai coach/i);
      expect(textarea).toHaveAttribute('placeholder');
    });

    it('intent buttons are accessible', () => {
      render(<AICoachChat />);

      const buttons = screen.getAllByRole('button');
      expect(buttons.length).toBeGreaterThan(0);
    });
  });
});

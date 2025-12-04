# Supabase Edge Functions

These functions run on Deno runtime in Supabase Edge Functions environment.

## TypeScript Errors in VS Code

You may see TypeScript errors about `Deno` not being defined. These are expected because:
- VS Code uses Node.js/Browser TypeScript by default
- These files run in **Deno runtime** (not Node.js)
- The `Deno` global is available at runtime
- Errors are suppressed with `@ts-ignore` comments

## Testing

The functions will work correctly when deployed to Supabase. The TypeScript errors are IDE-only and don't affect runtime.

To test locally with Deno:
```bash
deno run --allow-net --allow-env index.ts
```

Or use Supabase CLI:
```bash
supabase functions serve
```

# Code Style

## Functions

- Most functions should do one logical thing
- Prefer self-describing names (`draftPullRequest`, `handleTcpConnectionError`) over generic (`handler`, `fn`, `helper`)
- Avoid comments - the name and signature should already explain what it does

### Simple if

Use braceless `if` (with a trailing newline for clarity), when both expression and statement are same-line and trivial (1-2 idents / keywords).

<example>
if (stale) return;

</example>

## Comments

- **Only** write a line comment when the "why" is non-obvious: a hidden constraint, a workaround for a specific behaviour
- Any comments MUST be minimal: terse, concise, plain English sentence
- Never describe what the code does - well-named identifiers already do that

## Principles

1. Narrow types using modern TS coding standards - NEVER use type assertions (`as`, `!`, etc)
   - `as const` is a type constraint, not a "type assertion"
2. Prefer immutable - `readonly` and `const` by default
3. Strongly typed - no `any`, use `unknown` at boundaries then narrow
4. Magic values - use named constants
5. No clever one-liners - clarity beats brevity

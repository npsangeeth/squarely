SQUARELY


Expense-Splitting App for Shared Households/Trips (Splitwise-style, but deeper)
Groups, shared expenses, settle-up logic, multi-currency. Schema: groups, expenses, expense_shares, settlements — the settle-up algorithm (minimizing number of transactions to settle debts) is a real algorithmic challenge worth discussing in interviews. Later agent: parses a forwarded receipt photo/text, splits it intelligently (e.g., "everyone except Sam had drinks"), and proposes the split for approval.


Core — Groups & Members
    Create a group (name, emoji icon, default currency)
    Invite members by email or shareable link
    Join a group via invite link
    View all your groups with net balance per group (Groups overview, mobile + desktop)
    Owner vs. member roles

Core — Expenses

    Add an expense: description, amount, payer, date
    Four split types: equal, exact amount, percentage, and itemized (your differentiator)
    Itemized splitting: break a bill into line items, assign each item to specific people (including partial/split items like "salmon split between Jordan and Sam")
    Automatic proportional tax/tip allocation based on each person's share of the itemized subtotal, with cent-accurate rounding reconciliation
    Live split preview before saving
    Edit an existing expense (shares recomputed, not just patched)
    Soft-delete an expense (preserves audit history)

Core — Balances & Settling

    Per-group balance view ("you're owed / you owe"), computed live, never stored
    Global balance summary across all groups (desktop overview)
    Settle-up algorithm: simplifies all debts in a group down to the minimum number of transactions (debt-simplification / greedy net-balance matching)
    Record a settlement/payment between two members
    Explainable balances — every number traceable back to the expenses that built it

Core — Activity & Trust

    Per-group activity feed (expenses added/edited, members joined, settlements recorded)
    Full audit trail (activity_log) backing the feed

Auth & Account

    Sign up / log in (JWT + refresh token)
    Basic profile (name, avatar)

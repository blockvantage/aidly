## 📄 Project Requirements Document (PRD)

### 🔹 Overview
Build a transparent, crypto-powered aid distribution platform with:
- A global onchain pool split by categories (Food, Medicine, Education, Emergency)
- Admin-controlled aid approvals
- Off-chain verification, proof-of-use, and task requirements
- Clean, simple frontend showing live data and allowing donors to contribute via wallet

### 🔹 Goals
- Provide a simple and transparent system for sending aid directly to those in need
- Allow collective donations with per-category tracking
- Build trust by requiring proof and small tasks for continued aid
- Keep the process efficient and human-driven off-chain while tracking all financials on-chain

### 🔹 Key User Roles
- **Donor**: Sends USDC to a selected category pool
- **Receiver**: Applies for aid off-chain, receives funds on approval
- **Admin**: Verifies cases, approves aid, triggers contract calls

### 🔹 Functional Requirements
- Smart contract for category-based USDC pooling and admin-controlled releases
- Frontend with:
  - Landing page
  - Live pool display
  - Wallet connect (RainbowKit)
  - Donation UI
  - Admin dashboard for triggering aid release
- Off-chain:
  - Aid request intake (Telegram/form)
  - Proof submission tracking (Notion/Airtable)
  - Task completion logic

### 🔹 Non-Functional Requirements
- Highly available and performant UI
- Secure smart contracts (auditable logic)
- Clear documentation

---

## 🎨 Frontend Guidelines

### 🧠 Tools & Libraries
- Framework: Next.js
- Wallet Integration: RainbowKit + wagmi
- UI: TailwindCSS
- Charting (optional): react-chartjs-2 / @visx/xychart

### 📀 Page Structure (Detailed)

#### `/` — Landing Page
- Hero section with platform description and purpose.
  - Clearly state that this is a **decentralized platform to help people in need**, not just by giving money, but by **empowering them through learning and contribution**.
  - Emphasize that those who receive help are asked to prove it was used responsibly, and in future rounds, are encouraged to do something meaningful: learn, help others, or grow.
  - Highlight that **donors fund real needs**, and **recipients gain dignity and tools for a better future**.
- Clear dual CTA:
  - **"I want to help"** → Scrolls to donation flow
  - **"I need help"** → Scrolls to help request section
- Live global donation pool + breakdown per category (Food, Medicine, Education, Emergency).
- Global stats: total donated, number of people helped, most recent aid activity.
- "How it Works" section:
  - **For Donors**: connect wallet → choose category → donate → track impact
  - **For Help Seekers**: click "Request Help" → fill form → wait for review → receive aid → submit proof → do a task for next round
- Wallet connection interface using RainbowKit.
- Donate form:
  - Choose category
  - Enter amount
  - Send USDC transaction
- **Request Help form** (off-chain):
  - Name (optional)
  - Wallet address
  - Aid category
  - Location (city or region)
  - Explanation of need
  - File upload for proof (photo/video)
- Footer with platform mission, links, contact info.

#### `/admin` — Admin Dashboard
- Access control based on wallet address (read from config/env).
- View list of aid requests:
  - Wallet address
  - Category
  - Amount requested
  - Reason / note
  - Status (pending, approved, released)
  - Proof submission link (if available)
  - Task submission (if required for repeat aid)
- Search/filter requests by category, status, or wallet.
- Approve button for each pending request, triggering contract interaction.
- Ability to view all past disbursements with timestamps.
- (Future) Dashboard analytics: most funded categories, aid distribution by location.

#### `/donate/success` — Donation Confirmation Page
- Simple page that confirms a successful donation.
- Displays category funded, amount, and transaction hash.
- CTA to return to the landing page or explore stats.

#### `/privacy` — Privacy Policy Page (optional)
- Outline of how user data is handled (if any is stored).
- What data is stored off-chain (aid requests, proof, tasks).
- Clarify that wallet addresses are public and used for interaction.

#### (Future) `/impact` — Public Impact Tracker Page
- Charts and visuals of total donations per category
- Number of people helped per week/month
- List of anonymized success stories (with consent)

---

## 🧠 Backend Structure Doc (Gin)

### Stack
- Language: Go
- Framework: Gin
- Database: **Postgres** (self-hosted or managed)

### Core Services
- `POST /request` — Submit new aid request
- `GET /requests` — List all requests (admin only)
- `POST /approve` — Approve a request and initiate contract interaction
- `POST /proof` — Upload proof of aid usage (linked to specific request)
- `POST /task` — Submit task proof for additional aid eligibility

### Database Schema (Expanded)

- `requests`
  - id
  - wallet_address
  - category (enum)
  - amount_requested
  - reason
  - status (pending/approved/released)
  - proof_url (optional)
  - task_required (bool)
  - task_type (enum: learning, work, onboarding)
  - task_proof_url (optional)
  - created_at

- `admins`
  - id
  - wallet_address

---

## 🔀 App Flow Doc

### Donor Flow
1. Opens site
2. Views live category funds
3. Connects wallet
4. Selects category + enters amount
5. Sends donation (USDC)
6. Transaction confirmed, pool updated (onchain)

### Receiver Flow (Expanded)
1. Applies via off-chain form or Telegram bot
2. Request saved in DB with status = pending
3. Admin reviews and approves request (sets amount + category)
4. Admin triggers `releaseAid()` → onchain tx
5. Funds sent directly to receiver's wallet
6. Receiver must submit **proof-of-use** (e.g., receipt, video, message)
7. If they apply again, they must also:
   - Submit a **completed task** of type:
     - Learn something and document it
     - Do meaningful work and show result
     - Onboard someone else in need
   - Submit task proof (text, photo, or short video)

### Admin Flow
1. Connects wallet on `/admin`
2. Views list of open requests
3. Reviews details, requests proof if needed
4. Approves and triggers release on smart contract
5. Marks status as `released` in DB
6. Optionally updates task or proof records for future eligibility

---

## 🔿 Tech Stack Doc

### Frontend
- Next.js (React)
- RainbowKit + wagmi
- TailwindCSS

### Backend
- Go (Gin)
- **Postgres**
- REST API

### Smart Contracts
- Solidity
- Base Network (USDC)
- Deployed via Foundry (forge)

### Wallets Supported
- MetaMask, Coinbase Wallet, WalletConnect

---

## 📋 System Prompts (Telegram/Bot Assistant)

### Aid Application Prompt:
> “Hi! To apply for aid, please share:
> 1. Your wallet address
> 2. What you need help with (food, medicine, etc.)
> 3. A short explanation of your situation
> 4. Any supporting photo/video (optional but helps)”

### Proof-of-Use Prompt:
> “Thanks for receiving aid! Please submit a photo, video, or short message explaining how you used the support. This helps us ensure the help goes to real needs.”

### Task Prompt:
> “To receive more aid, please complete a simple task:
> - Learn something and share it
> - Do some work or provide help and document it
> - Help onboard someone else who needs aid
> Please upload a photo, video, or short explanation of your task.”

---

## 📂 File Structure Doc

### Root
```
/project-root
  |- contracts/      # Foundry smart contracts
  |  |- src/
  |  |- script/
  |  |- test/
  
  |- frontend/       # Next.js frontend (RainbowKit initialized)
  |  |- pages/
  |  |- components/
  |  |- styles/
  |  |- utils/
  |  |- hooks/
  
  |- backend/        # Go backend (Gin framework)
  |  |- cmd/
  |  |- handlers/
  |  |- models/
  |  |- routes/
  |  |- services/
  |  |- main.go

  |- .env
  |- README.md
```

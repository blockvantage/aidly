## 🛠️ Step-by-Step Guide to Build the Crypto Aid Platform

This guide outlines each step needed to build the decentralized aid platform using the pre-defined stack (Next.js + Go + RainbowKit + Foundry).

---

### 🧱 Phase 1: Project Setup

#### 1.1 Create Project Structure
Ensure you have these folders:
```
/project-root
  |- contracts/   # forge init --no-commit
  |- frontend/    # npm init @rainbow-me/rainbowkit@latest
  |- backend/     # empty folder for Gin server
```

#### 1.2 Environment Setup
Create a `.env` in each folder with relevant secrets:
- Frontend: `NEXT_PUBLIC_RPC_URL`, `NEXT_PUBLIC_CONTRACT_ADDRESS`
- Backend: `DATABASE_URL`, `ADMIN_WALLET_WHITELIST`
- Contracts: (none needed initially)

---

### 🔗 Phase 2: Smart Contracts

#### 2.1 Create `AidPool.sol`
- Categories (enum)
- Mapping of funds per category
- `donate(category)`
- `releaseAid(category, to, amount)`
- Use OpenZeppelin for access control (admin only)

#### 2.2 Write Tests
Use Foundry:
```bash
forge test
```

#### 2.3 Deploy Contract
Use `forge script` or deploy manually to Base testnet:
```bash
forge script script/Deploy.s.sol --rpc-url $RPC_URL --private-key $PRIVATE_KEY --broadcast
```

#### 2.4 Save ABI + Address
Copy ABI and deployed address to:
```
/frontend/contracts/
/backend/contracts/
```

---

### 🎨 Phase 3: Frontend

#### 3.1 Build `/` Landing Page
- Live donation pool data (from contract)
- Hero with mission + dual CTA
- Donation Form:
  - Connect Wallet (RainbowKit)
  - Select Category
  - Enter amount
  - Call `donate()`
- Request Help Form (off-chain):
  - Wallet address
  - Category
  - Location
  - Reason
  - File Upload (proof)
- Global Stats Component

#### 3.2 Build `/admin` Dashboard
- Wallet-gated route
- Fetch aid requests from backend
- Approve button triggers backend POST → contract call
- Display released aid history

---

### 🧠 Phase 4: Backend API (Go + Gin)

#### 4.1 Setup Project
```bash
go mod init backend
go get github.com/gin-gonic/gin
go get github.com/lib/pq
```

#### 4.2 Connect Postgres DB
- Create `requests` and `admins` tables
- Use GORM or database/sql to manage records

#### 4.3 Create Routes
- `POST /request`: store new request
- `GET /requests`: list pending requests
- `POST /approve`: mark approved, return contract payload
- `POST /proof`: upload + link proof to request
- `POST /task`: submit task for future aid

#### 4.4 Protect Admin Routes
- Middleware to verify wallet address (env whitelist)

---

### 🧪 Phase 5: Testing & QA

#### 5.1 Local Testing
- Simulate full flow:
  - Donor connects, donates
  - Receiver submits form
  - Admin reviews + approves
  - Contract disburses funds
  - Receiver submits proof/task

#### 5.2 Deploy to Testnet
- Base Goerli for contracts
- Vercel for frontend
- Railway/Fly.io for backend
- Supabase/Render for Postgres DB

---

### 🚀 Phase 6: Launch Plan

#### 6.1 Finalize Smart Contract (audit recommended)
#### 6.2 Enable public access to landing and donation
#### 6.3 Preload some test cases with manual verification
#### 6.4 Share early impact stories
#### 6.5 Add Telegram bot or form link to promote requesting help

---

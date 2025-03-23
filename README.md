# 🌟 Aidly - Transparent Crypto Aid Distribution

A decentralized platform empowering direct aid distribution through crypto, built on Base Network with transparent tracking and proof-of-use verification.

## 🎯 Overview

Aidly enables direct aid distribution through:
- Category-based USDC donation pools (Food, Medicine, Education, Emergency)
- Transparent on-chain fund tracking
- Admin-verified aid distribution
- Proof-of-use requirements and task-based incentives

## 🛠 Tech Stack

- **Frontend**: Next.js, RainbowKit, wagmi, TailwindCSS
- **Backend**: Go (Gin), PostgreSQL
- **Smart Contracts**: Solidity (Base Network)
- **Wallet Support**: MetaMask, Coinbase Wallet, WalletConnect

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- Go 1.20+
- PostgreSQL
- Foundry

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/aidly.git
cd aidly
```

2. Install frontend dependencies:
```bash
cd frontend
npm install
```

3. Install backend dependencies:
```bash
cd ../backend
go mod tidy
```

4. Install and build smart contracts:
```bash
cd ../contracts
forge install
forge build
```

### Configuration

1. Create `.env` files in each directory:

```bash
# Root .env
POSTGRES_URL=your_postgres_url
ADMIN_WALLETS=comma,separated,addresses

# Frontend .env.local
NEXT_PUBLIC_BACKEND_URL=http://localhost:8080
NEXT_PUBLIC_CONTRACT_ADDRESS=your_contract_address

# Backend .env
DATABASE_URL=your_postgres_url
JWT_SECRET=your_jwt_secret
```

### Running Locally

1. Start the frontend:
```bash
cd frontend
npm run dev
```

2. Start the backend:
```bash
cd backend
go run cmd/main.go
```

## 📁 Project Structure

```
/
├── contracts/      # Foundry smart contracts
├── frontend/       # Next.js frontend
└── backend/        # Go backend
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

MIT

## 🔗 Links

- [Documentation](./docs)
- [Smart Contract Specs](./contracts/README.md)
- [Frontend Guide](./frontend/README.md)

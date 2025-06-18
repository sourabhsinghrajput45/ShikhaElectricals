
# ⚡ Shikha Electricals – Inventory Management Platform

A full-stack inventory and brand management platform built for Shikha Electricals to simplify product categorization, stock handling, and brand-level filtering for retail usage. The system is optimized for non-technical staff with a clean, intuitive interface and real-time interaction capabilities.

## 📌 Overview

This application allows store owners and staff to:
- View and manage electrical product listings
- Filter products dynamically based on brand groups
- Add/update categories and brand entries through a secure API
- Navigate easily with a responsive UI designed for tablet and desktop environments

Built using React for the frontend and Node.js (Express) for the backend, the platform supports easy extension for billing, inventory tracking, or stock alert systems.

## 🧰 Tech Stack

| Layer        | Technology                     |
|--------------|---------------------------------|
| Frontend     | React, JavaScript, Tailwind CSS |
| Backend      | Node.js, Express.js             |
| UI Icons     | Lucide-react                    |
| Styling      | Tailwind CSS                    |

## ✨ Key Features

- 🔍 **Brand Group Filtering**: Filter inventory by grouped brand categories in real-time
- 📱 **Responsive UI**: Mobile/tablet-friendly layout using Tailwind CSS
- ⚙️ **Reusable Components**: Modular component structure with React hooks (`useState`, `useRef`)
- 🔄 **Dynamic Dropdowns**: Toggle and filter functionality with clean dropdown design
- 🔐 **Scalable Backend** *(Pluggable)*: Ready to integrate with a Node.js/Express API for full CRUD support
- 🧪 **Production-Ready UI**: Designed for actual retail workflow needs and daily usage

## 🚀 Getting Started

### 🔧 Prerequisites

- Node.js and npm
- Git
- A code editor (VSCode recommended)

### 📥 Installation

```bash
# Clone the repository
git clone https://github.com/your-username/shikha-electricals-inventory.git
cd shikha-electricals-inventory

# Install dependencies
npm install

# Start the frontend (React)
npm run dev
```

> If backend integration is included, navigate to `/server` and run `node index.js` or configure as per your setup.

## 🖼️ UI Preview

> Add screenshots here (e.g., dropdown filter, inventory grid, mobile view)

## 🧱 Project Structure

```plaintext
shikha-electricals-inventory/
├── public/
├── src/
│   ├── components/
│   │   └── BrandDropdown.js
│   ├── App.js
│   └── index.js
├── package.json
└── tailwind.config.js
```

## 📂 Backend (Optional / For Full Integration)

- Built using Express.js with route handling for:
  - GET/POST product listings
  - CRUD for brand/category data
- Can be extended with MongoDB or PostgreSQL for persistent data storage

## 🧠 Learnings & Takeaways

- Component-based design with reusable logic in React  
- Real-world retail UI/UX considerations for non-technical end users  
- Lightweight and scalable architecture with scope for future modules (billing, notifications, stock tracking)

## 📄 License

This project is client-specific and developed for educational and demonstrative purposes. Do not redistribute without permission.

## 🙌 Acknowledgments

Thanks to Shikha Electricals for providing the opportunity to develop and deploy this solution for their retail workflow.

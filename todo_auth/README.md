### ✅ `README.md`

```md
# Angular Auth + Todo App 📝🔐

A simple Angular application that demonstrates:

- Signal-based authentication with persistent login
- Protected routes using route guards
- A todo list with add, complete, delete, and clear functionality
- Async form validation with debounce
- Simulated API and loading states
- LocalStorage-based persistence
- Minimal, clean UI using SCSS

---

## 🚀 Features

- ✅ Login with username (hardcoded validation + debounce)
- ✅ Auth state with Angular Signals
- ✅ Persistent login using `localStorage`
- ✅ Route guard to protect `/todos`
- ✅ Add / Complete / Delete / Clear tasks
- ✅ Todos saved to `localStorage`
- ✅ Lazy loading + standalone components
- ✅ Responsive, minimal UI

---

## 🧪 Demo Credentials

Use one of the following usernames to login:

- `alice`
- `bob`
- `charlie`

(Password is hardcoded; no real password check)

---

## 🛠️ Getting Started

1. **Clone the repo**

```bash
git clone https://github.com/your-username/angular-auth-todo.git
cd angular-auth-todo
```

2. **Install dependencies**

```bash
npm install
```

3. **Run the app**

```bash
ng serve
```

Then open `http://localhost:4200` in your browser.

---

## 🧩 Project Structure

```
src/
├── app/
│   ├── core/       
│   ├── features/
│   │   ├── auth/      
│   │   └── todos/      
│   └── shared/         
```

---

## 🧠 Built With

- Angular 15+ / 16+ (Standalone Components & Signals)
- SCSS for styling
- Angular Router (lazy loading)
- Angular Reactive Forms
- RxJS

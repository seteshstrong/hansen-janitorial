import { useLocation } from "preact-iso";

export function Header() {
  const { url } = useLocation();

  return (
    <header>
      <nav>
        <a href="/" class={url == "/" && "active"}>
          Home
        </a>
        <a href="/About" class={url == "/About" && "active"}>
          About
        </a>
        <a href="/Services" class={url == "/Services" && "active"}>
          Services
        </a>
        <a href="/Dashboard" class={url == "/Dashboard" && "active"}>
          Dashboard
        </a>
        <a href="/Tasks" class={url == "/Tasks" && "active"}>
          Tasks
        </a>
        <a href="/Chat" class={url == "/Chat" && "active"}>
          Chat
        </a>
        <a href="/Account" class={url == "/Account" && "active"}>
          Account
        </a>
        <a href="/404" class={url == "/404" && "active"}>
          404
        </a>
      </nav>
    </header>
  );
}

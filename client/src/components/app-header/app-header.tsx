import "./app-header.css";

export default function AppHeader(props: {
    title: string
}) {
    return (
        <header className="app-header">
            <div className="app-header-title">{props.title}</div>
        </header>
    )
};
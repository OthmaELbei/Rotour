import { Outlet } from "react-router-dom";

export default function PostLayout() {
    return (
        <>
            <div
                style={{
                    background: "green",
                    padding: "15px",
                    margin: "10",
                    color: "white",
                }}
            >
                Post
            </div>
            <div>
                <Outlet />
            </div>
            <div
                style={{
                    background: "green",
                    padding: "15px",
                    margin: "10",
                    color: "white",
                }}
            >
                Post
            </div>
        </>
    );
}

import React from 'react';

export const Header = () => {


    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand text-white" href="/">Home</a>
                    <a className="btn btn-secondary" href="/login">Login</a>
                </div>
            </nav>
        </>
    )
}
function SignUpForm() {
    return (
        <>
            <h1>Create New Account</h1>
            <form>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" />
                </div>

                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" />
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" />
                </div>

                <button>Sign Up</button>
            </form>
        </>
    );
}

export default SignUpForm;

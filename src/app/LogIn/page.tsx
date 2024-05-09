

import { authenticate } from '../actions/auth';

export default function LogIn() {
    return (
        <form action={authenticate} className="space-y-3">
            <div>
                <h1>
                    Please log in to continue.
                </h1>
                <div className="w-full">
                    <div>
                        <label
                            htmlFor="email"
                        >
                            Email
                        </label>
                        <div >
                            <input
                                id="email"
                                type="email"
                                name="email"
                                placeholder="Enter your email address"
                                required
                            />
                        </div>
                    </div>
                    <div>
                        <label
                            htmlFor="password"
                        >
                            Password
                        </label>
                        <div>
                            <input
                                id="password"
                                type="password"
                                name="password"
                                placeholder="Enter password"
                                required
                                minLength={6}
                            />
                        </div>
                    </div>
                </div>
                <button >Log in</button>
            </div>
        </form>
    );
}

function LoginButton() {

    return (
        <button className="mt-4 w-full" >
            Log in
        </button>
    );
}



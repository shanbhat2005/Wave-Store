import { Link } from 'react-router'
import { useAuthHooks } from '../../hooks/authHooks'

const RegisterPage = () => {

const {navigate,register,handleSubmit,errors,handleRegister}= useAuthHooks()

  return (
    
  <div className="relative flex min-h-screen flex-col justify-between overflow-x-hidden bg-background text-on-surface antialiased selection:bg-primary-fixed selection:text-on-primary-fixed">
    <div className="pointer-events-none fixed inset-0 z-0">
      <div className="absolute -top-32 left-1/2 h-[500px] w-[850px] -translate-x-1/2 rounded-full bg-[#f2ede7]/70 opacity-70 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-[350px] w-[450px] rounded-full bg-[#ece6de]/60 opacity-50 blur-[100px]" />
    </div>

    <header className="relative z-10 w-full border-b border-[#e5e3df] bg-surface/80 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-6 py-5 sm:px-10">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-2 font-headline-sm text-2xl font-bold tracking-tight text-on-surface">
            <span className="inline-block h-2 w-2 rounded-full bg-primary" />
            WaveStore
          </span>
          <span className="hidden border-l border-[#e5e3df] pl-3 text-[11px] font-medium uppercase tracking-[0.2em] text-secondary sm:inline-block">
            Atelier Editions
          </span>
        </div>
        <div className="flex items-center gap-2 font-body-sm text-sm text-on-surface-variant">
          <span className="text-secondary">Already registered?</span>
          <p
          onClick={()=> navigate("/")}
            className="font-semibold text-on-surface underline decoration-[#dcc1ba] underline-offset-4 transition-colors duration-150 hover:text-primary"
            to="/"
          >
            Log In
          </p>
        </div>
      </div>
    </header>

    <main className="relative z-10 flex flex-1 items-center justify-center px-4 py-12 sm:px-6">
      <div className="w-full max-w-[480px]">
        <div className="relative overflow-hidden rounded-lg border border-[#e5e3df] bg-surface-container-lowest p-8 shadow-[0_4px_30px_rgba(26,28,27,0.04),0_1px_3px_rgba(26,28,27,0.03)] sm:p-10">
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#dcc1ba] via-primary to-[#dcc1ba]" />

          <div className="mb-8 text-center">
            <div className="mb-4 inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-[#e5e3df] bg-surface-container px-3 py-1 font-label-caps text-label-caps font-bold tracking-[0.18em] text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              NEW MEMBER REGISTRY
            </div>
            <h1 className="mb-2 font-headline-md text-[30px] font-normal uppercase leading-tight tracking-tight text-on-surface sm:text-[34px]">
              Create Account
            </h1>
            <p className="mx-auto max-w-sm font-body-sm text-[14px] leading-relaxed text-secondary">
              Join the WaveStore editions and hardware collective.
            </p>
          </div>

          <button
            className="group flex w-full items-center justify-center gap-3 rounded-md border border-[#dcc1ba] bg-white px-4 py-3 font-title-md text-sm font-semibold text-on-surface shadow-[0_1px_2px_rgba(0,0,0,0.03)] transition-all duration-150 hover:border-on-surface hover:bg-surface-bright active:scale-[0.99]"
            type="button"
          >
            <svg
              aria-hidden="true"
              className="h-4 w-4 flex-shrink-0"
              viewBox="0 0 24 24"
            >
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                fill="#EA4335"
              />
            </svg>
            <span className="tracking-wide group-hover:text-black">
              Continue with Google
            </span>
          </button>

          <div className="relative my-6 flex items-center justify-center">
            <div className="absolute w-full border-t border-[#e5e3df]" />
            <span className="relative whitespace-nowrap bg-surface-container-lowest px-3 font-label-caps text-[10px] uppercase tracking-[0.2em] text-secondary">
              Or register with email
            </span>
          </div>

          <form
            className="space-y-4"
            noValidate
            onSubmit={handleSubmit(handleRegister)}
          >
            <div>
              <label
                className="mb-1.5 block font-label-caps text-[11px] font-semibold uppercase tracking-[0.12em] text-on-surface"
                htmlFor="full_name"
              >
                Full Name
              </label>
              <div className="relative">
                <input
                  {...register('name', {
                    required: 'Name is required.',
                    validate: {
                      minLength: (value) =>
                        value.trim().length >= 2 ||
                        'Name must be at least 2 characters.',
                      maxLength: (value) =>
                        value.trim().length <= 15 ||
                        'Name must be no more than 15 characters.',
                    },
                  })}
                  className="w-full rounded-md border border-[#dcc1ba] bg-surface-container-low/60 px-3.5 py-2.5 text-sm text-on-surface transition-all duration-150 placeholder:text-outline/60 focus:border-on-surface focus:bg-white focus:outline-none focus:ring-1 focus:ring-on-surface"
                  id="full_name"
                  placeholder="Alex Thorne"
                  type="text"
                />
                <span className="material-symbols-outlined pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-[18px] text-outline/70">
                  person
                </span>
              </div>
              {errors.name && (
                <p className="mt-1 font-body-sm text-[12px] text-red-600" role="alert">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <label
                className="mb-1.5 block font-label-caps text-[11px] font-semibold uppercase tracking-[0.12em] text-on-surface"
                htmlFor="email"
              >
                Email Address
              </label>
              <div className="relative">
                <input
                  {...register('email', {
                    required: 'Email is required.',
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: 'Enter a valid email address.',
                    },
                  })}
                  className="w-full rounded-md border border-[#dcc1ba] bg-surface-container-low/60 px-3.5 py-2.5 text-sm text-on-surface transition-all duration-150 placeholder:text-outline/60 focus:border-on-surface focus:bg-white focus:outline-none focus:ring-1 focus:ring-on-surface"
                  id="email"
                  placeholder="alex.thorne@domain.io"
                  type="email"
                />
                <span className="material-symbols-outlined pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-[18px] text-outline/70">
                  mail
                </span>
              </div>
              {errors.email && (
                <p className="mt-1 font-body-sm text-[12px] text-red-600" role="alert">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <div className="mb-1.5 flex items-center justify-between">
                <label
                  className="block font-label-caps text-[11px] font-semibold uppercase tracking-[0.12em] text-on-surface"
                  htmlFor="password"
                >
                  Password
                </label>
                <span className="font-body-sm text-[12px] text-secondary">
                  Minimum 8 characters
                </span>
              </div>
              <div className="relative">
                <input
                  {...register('password', {
                    required: 'Password is required.',
                    minLength: {
                      value: 8,
                      message: 'Password must be at least 8 characters.',
                    },
                  })}
                  className="w-full rounded-md border border-[#dcc1ba] bg-surface-container-low/60 px-3.5 py-2.5 text-sm text-on-surface transition-all duration-150 placeholder:text-outline/60 focus:border-on-surface focus:bg-white focus:outline-none focus:ring-1 focus:ring-on-surface"
                  id="password"
                  placeholder="••••••••••••"
                  type="password"
                />
                <button
                  aria-label="Password visibility toggle (not active)"
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-outline transition-colors hover:text-on-surface"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    visibility
                  </span>
                </button>
              </div>
              {errors.password && (
                <p className="mt-1 font-body-sm text-[12px] text-red-600" role="alert">
                  {errors.password.message}
                </p>
              )}
              <div className="mt-2 grid grid-cols-4 gap-1.5">
                {[1, 2, 3, 4].map((segment) => (
                  <div
                    className="h-1 rounded-full bg-surface-container-high transition-colors duration-200"
                    key={segment}
                  />
                ))}
              </div>
            </div>

            <div>
              <label
                className="mb-1.5 block font-label-caps text-[11px] font-semibold uppercase tracking-[0.12em] text-on-surface"
                htmlFor="account_role"
              >
                Account Role
              </label>
              <div className="relative">
                <select
                  {...register('role')}
                  className="w-full cursor-pointer appearance-none rounded-md border border-[#dcc1ba] bg-surface-container-low/60 px-3.5 py-2.5 pr-10 text-sm text-on-surface transition-all duration-150 focus:border-on-surface focus:bg-white focus:outline-none focus:ring-1 focus:ring-on-surface"
                  defaultValue="user"
                  id="account_role"
                  name="role"
                >
                  <option value="user">Customer</option>
                  <option value="seller">Seller</option>
                </select>
                <span className="material-symbols-outlined pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-[20px] text-outline">
                  expand_more
                </span>
              </div>
              <p className="mt-2 flex items-center gap-1.5 font-body-sm text-[12px] text-on-surface-variant">
                <span className="material-symbols-outlined text-[15px] text-tertiary">
                  check_circle
                </span>
                <span>
                  Customer access: Discover curated scheduled drops and
                  acquisition rights.
                </span>
              </p>
            </div>

            <div className="pt-1.5">
              <label className="group flex cursor-pointer items-start gap-3">
                <input
                  className="mt-0.5 h-4 w-4 cursor-pointer rounded border-[#dcc1ba] text-on-surface transition-colors focus:ring-0 focus:ring-offset-0"
                  {...register('terms', {
                    required: 'You must agree to the terms to register.',
                  })}
                  type="checkbox"
                />
                <span className="select-none text-[13px] leading-snug text-secondary group-hover:text-on-surface">
                  I agree to WaveStore&apos;s{' '}
                  <a
                    className="font-medium text-on-surface underline decoration-[#dcc1ba] underline-offset-2 hover:text-primary"
                    href="#terms"
                  >
                    Terms of Sale
                  </a>{' '}
                  and{' '}
                  <a
                    className="font-medium text-on-surface underline decoration-[#dcc1ba] underline-offset-2 hover:text-primary"
                    href="#privacy"
                  >
                    Privacy Policy
                  </a>
                  .
                </span>
              </label>
              {errors.terms && (
                <p className="mt-1 font-body-sm text-[12px] text-red-600" role="alert">
                  {errors.terms.message}
                </p>
              )}
            </div>

            <button
              className="group mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-[#1a1c1b] px-6 py-3.5 font-title-md text-xs font-semibold uppercase tracking-[0.14em] text-white shadow-sm transition-all duration-150 hover:bg-[#2f3130] active:scale-[0.99] sm:text-sm"
              type="submit"
            >
              <span>CREATE ACCOUNT</span>
              <span className="material-symbols-outlined text-[18px] transition-transform group-hover:translate-x-1">
                arrow_forward
              </span>
            </button>
          </form>

          <div className="mt-6 border-t border-[#e5e3df] pt-5 text-center">
            <p className="text-[13px] text-secondary">
              Already have an account?{' '}
              <span
                onClick={() => navigate('/')}
                className="ml-1 cursor-pointer font-semibold text-on-surface underline decoration-[#dcc1ba] underline-offset-4 transition-colors hover:text-primary"
              >
                Log in
              </span>
            </p>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-[10px] font-label-caps uppercase tracking-[0.14em] text-secondary">
          <span className="flex items-center gap-1">
            <span className="material-symbols-outlined text-[14px] text-tertiary">
              lock
            </span>
            Secure Registry
          </span>
          <span className="h-1 w-1 rounded-full bg-[#dcc1ba]" />
          <span className="flex items-center gap-1">
            <span className="material-symbols-outlined text-[14px] text-primary">
              verified_user
            </span>
            Authentic Guild
          </span>
          <span className="h-1 w-1 rounded-full bg-[#dcc1ba]" />
          <span>Edition 2025</span>
        </div>
      </div>
    </main>

    <footer className="relative z-10 w-full border-t border-[#e5e3df] bg-surface">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center justify-between gap-4 px-6 py-6 sm:px-10 md:flex-row">
        <p className="font-body-sm text-xs tracking-wide text-secondary">
          © 2025 WaveStore. Experimental Curated Drops &amp; Physical Artifacts.
        </p>
        <nav className="flex flex-wrap items-center gap-6 font-label-caps text-xs uppercase tracking-[0.1em] text-secondary">
          <a className="transition-colors duration-150 hover:text-primary" href="#hardware">
            Hardware Specs
          </a>
          <a className="transition-colors duration-150 hover:text-primary" href="#archive">
            Catalog Archive
          </a>
          <a className="transition-colors duration-150 hover:text-primary" href="#terms">
            Terms of Sale
          </a>
          <a className="transition-colors duration-150 hover:text-primary" href="#privacy">
            Privacy Policy
          </a>
          <a
            className="flex items-center gap-1.5 transition-colors duration-150 hover:text-primary"
            href="#status"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-tertiary" />
            Status
          </a>
        </nav>
      </div>
    </footer>
  </div>
  )
}

export default RegisterPage

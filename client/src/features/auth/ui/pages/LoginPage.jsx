import { useState } from 'react'
import { Link } from 'react-router'
import { useAuthHooks } from '../../hooks/authHooks'

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false)
  const { navigate, register, handleSubmit, errors,handleLogin } = useAuthHooks()

  return (
    <div className="relative flex min-h-screen flex-col justify-between overflow-x-hidden bg-background text-on-background antialiased selection:bg-primary selection:text-on-primary">
      <div className="pointer-events-none fixed inset-0 z-0 opacity-40">
        <div className="relative mx-auto flex h-full max-w-[1440px] justify-between border-x border-[#ebe9e5]">
          <div className="hidden h-full w-px bg-[#f0ede8] lg:block" />
          <div className="hidden h-full w-px bg-[#f0ede8] lg:block" />
        </div>
      </div>

      <header className="relative z-10 mx-auto flex w-full max-w-[1440px] items-center justify-between px-6 pb-4 pt-8 md:px-12">
        <Link
          className="group inline-flex items-center gap-3 text-on-surface transition-opacity hover:opacity-80"
          to="/"
        >
          <div className="flex h-8 w-8 items-center justify-center border border-on-surface/20 bg-surface-container-lowest text-on-surface shadow-[2px_2px_0px_#1a1c1b]">
            <span className="material-symbols-outlined text-[17px]">
              shopping_bag
            </span>
          </div>
          <span className="font-headline-sm text-2xl font-medium uppercase tracking-[-0.03em] text-on-surface">
            WaveStore
          </span>
        </Link>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-2 border border-[#e5e3df] bg-surface-container-lowest px-3 py-1 text-[11px] font-label-caps uppercase tracking-[0.18em] text-secondary shadow-[1px_1px_0px_rgba(0,0,0,0.05)]">
            <span className="h-1.5 w-1.5 rounded-full bg-tertiary" />
            Vault Edition № 2.4
          </span>
        </div>
      </header>

      <main className="relative z-10 flex flex-1 flex-col items-center justify-center px-4 py-10 sm:px-6">
        <div className="w-full max-w-[440px]">
          <div className="relative border border-[#1a1c1b] bg-surface-container-lowest p-8 shadow-[6px_6px_0px_#1a1c1b] transition-transform duration-200 sm:p-10">
            <div className="mb-7 flex items-center justify-between border-b border-[#e5e3df] pb-4">
              <span className="text-[10px] font-label-caps font-bold uppercase tracking-[0.22em] text-outline">
                Authentication Record
              </span>
              <span className="font-body-sm text-[11px] italic text-secondary">
                Issue 2025
              </span>
            </div>

            <div className="mb-8 text-center">
              <h1 className="mb-2 font-headline-md text-[34px] font-medium uppercase leading-none tracking-tight text-on-surface sm:text-[38px]">
                Sign In
              </h1>
              <p className="font-body-md text-sm font-normal tracking-wide text-secondary">
                Access curated drops, editions &amp; orders
              </p>
            </div>

            <form
              className="space-y-5"
              noValidate
              onSubmit={handleSubmit(handleLogin)}
            >
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label
                    className="text-[11px] font-label-caps font-semibold uppercase tracking-[0.16em] text-on-surface"
                    htmlFor="email"
                  >
                    Email Address
                  </label>
                  <span className="text-[10px] font-label-caps font-medium uppercase tracking-[0.12em] text-outline">
                    Required
                  </span>
                </div>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-secondary">
                    <span className="material-symbols-outlined text-[18px]">
                      mail
                    </span>
                  </div>
                  <input
                    className="w-full rounded-none border border-[#1a1c1b]/30 bg-[#faf9f7] py-3 pl-10 pr-3.5 text-[14px] text-on-surface transition-all placeholder:text-outline/60 focus:border-[#1a1c1b] focus:outline-none focus:ring-1 focus:ring-[#1a1c1b]"
                    id="email"
                    {...register('email', {
                      required: 'Email is required.',
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: 'Enter a valid email address.',
                      },
                    })}
                    placeholder="operator@wavestore.id"
                    type="email"
                  />
                </div>
                {errors.email && (
                  <p className="pl-0.5 font-body-sm text-[11px] text-red-600" role="alert">
                    {errors.email.message}
                  </p>
                )}
                <p className="pl-0.5 font-body-sm text-[11px] text-secondary">
                  Primary communications and drop dispatch updates
                </p>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label
                    className="text-[11px] font-label-caps font-semibold uppercase tracking-[0.16em] text-on-surface"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <a
                    className="text-[11px] font-label-caps font-semibold uppercase tracking-[0.12em] text-primary transition-colors hover:text-primary-container"
                    href="#"
                  >
                    Forgot?
                  </a>
                </div>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-secondary">
                    <span className="material-symbols-outlined text-[18px]">
                      lock
                    </span>
                  </div>
                  <input
                    className="w-full rounded-none border border-[#1a1c1b]/30 bg-[#faf9f7] py-3 pl-10 pr-10 text-[14px] text-on-surface transition-all placeholder:text-outline/60 focus:border-[#1a1c1b] focus:outline-none focus:ring-1 focus:ring-[#1a1c1b]"
                    id="password"
                    {...register('password', {
                      required: 'Password is required.',
                    })}
                    placeholder="••••••••••••"
                    type={showPassword ? 'text' : 'password'}
                  />
                  <button
                    aria-label={
                      showPassword ? 'Hide password' : 'Show password'
                    }
                    aria-pressed={showPassword}
                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-secondary transition-colors hover:text-on-surface"
                    onClick={() => setShowPassword((visible) => !visible)}
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[18px]">
                      {showPassword ? 'visibility_off' : 'visibility'}
                    </span>
                  </button>
                </div>
                {errors.password && (
                  <p className="pl-0.5 font-body-sm text-[11px] text-red-600" role="alert">
                    {errors.password.message}
                  </p>
                )}
                <p className="pl-0.5 font-body-sm text-[11px] text-secondary">
                  Encrypted with biometric &amp; passkey authentication
                </p>
              </div>

              <div className="pt-2">
                <button
                  className="group flex w-full cursor-pointer items-center justify-center gap-2 rounded-none border border-[#1a1c1b] bg-[#1a1c1b] px-5 py-3.5 text-[12px] font-label-caps font-bold uppercase tracking-[0.18em] text-white shadow-[3px_3px_0px_rgba(137,53,29,0.35)] transition-all hover:bg-black active:translate-x-[1px] active:translate-y-[1px] active:shadow-none"
                  type="submit"
                >
                  <span>Sign In</span>
                  <span className="material-symbols-outlined text-[17px] transition-transform group-hover:translate-x-1">
                    arrow_forward
                  </span>
                </button>
              </div>
            </form>

            <div className="relative my-7">
              <div
                aria-hidden="true"
                className="absolute inset-0 flex items-center"
              >
                <div className="w-full border-t border-[#e5e3df]" />
              </div>
              <div className="relative flex justify-center text-center">
                <span className="bg-surface-container-lowest px-4 text-[10px] font-label-caps font-semibold uppercase tracking-[0.2em] text-outline">
                  Or Continue With
                </span>
              </div>
            </div>

            <div>
              <button
                className="group flex w-full cursor-pointer items-center justify-center gap-3 rounded-none border border-[#1a1c1b]/30 bg-surface-container-lowest px-4 py-3 text-[13px] text-on-surface shadow-[1px_1px_0px_rgba(0,0,0,0.06)] transition-colors hover:border-[#1a1c1b] hover:bg-[#faf9f7]"
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
                <span className="font-label-caps text-[11px] font-semibold uppercase tracking-[0.14em] text-on-surface">
                  Continue with Google
                </span>
              </button>
            </div>

            <div className="mt-7 border-t border-[#e5e3df] pt-5 text-center">
              <p className="font-body-sm text-[13px] text-secondary">
                Don&apos;t have an account?
                <span
                  onClick={() => navigate('/register')}
                  className="ml-1 cursor-pointer font-semibold tracking-wide text-primary underline underline-offset-4 transition-colors hover:text-on-primary-fixed-variant"
                >
                  Sign up
                </span>
              </p>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center gap-3 text-secondary">
            <span className="material-symbols-outlined text-[15px] text-tertiary">
              lock
            </span>
            <span className="text-[10px] font-label-caps font-semibold uppercase tracking-[0.18em]">
              End-to-End Encrypted Session
            </span>
            <span className="font-bold text-outline-variant">•</span>
            <span className="text-[10px] font-label-caps font-semibold uppercase tracking-[0.18em]">
              SSL 256-Bit Protocol
            </span>
          </div>
        </div>
      </main>

      <footer className="relative z-10 w-full border-t border-[#e5e3df] bg-surface-container-lowest">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center justify-between gap-4 px-6 py-6 text-center md:flex-row md:px-12 md:text-left">
          <div className="flex flex-wrap items-center justify-center gap-3 md:justify-start">
            <span className="font-headline-sm text-lg font-medium uppercase tracking-tight text-on-surface">
              WaveStore
            </span>
            <span className="hidden text-outline-variant sm:inline">|</span>
            <span className="text-xs tracking-wide text-secondary">
              © 2025 WaveStore. Experimental Curated Drops. All rights reserved.
            </span>
          </div>
          <nav
            aria-label="Footer Navigation"
            className="flex flex-wrap items-center justify-center gap-6"
          >
            <a
              className="text-xs font-label-caps uppercase tracking-[0.14em] text-secondary transition-colors hover:text-on-surface"
              href="#"
            >
              Hardware Specs
            </a>
            <a
              className="text-xs font-label-caps uppercase tracking-[0.14em] text-secondary transition-colors hover:text-on-surface"
              href="#"
            >
              Catalog Archive
            </a>
            <a
              className="text-xs font-label-caps uppercase tracking-[0.14em] text-secondary transition-colors hover:text-on-surface"
              href="#"
            >
              Terms of Sale
            </a>
            <a
              className="text-xs font-label-caps uppercase tracking-[0.14em] text-secondary transition-colors hover:text-on-surface"
              href="#"
            >
              Privacy Policy
            </a>
            <a
              className="flex items-center gap-1.5 text-xs font-label-caps uppercase tracking-[0.14em] text-secondary transition-colors hover:text-on-surface"
              href="#"
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

export default LoginPage

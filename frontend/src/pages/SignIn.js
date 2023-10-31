import Navigation from '../components/header/Navigation';
import SignIn from '../components/sign-in/SignIn';
import USER_ICON from '../assets/img/circle-user-solid.svg';

function SignInPage() {
  return (
    <>
      <Navigation />
      <main className="main bg-dark">
        <section className="sign-in-content">
          <SignIn
            icon={USER_ICON}
            alt="icone"
            title="Sign In"
            form_account="Username"
            form_password="Password"
            tick_text="Remember me"
            text_button="Sign In"
          />
        </section>
      </main>
    </>
  );
}

export default SignInPage;

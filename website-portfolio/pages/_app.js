import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../src/index.css';
import '../src/App.css';

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

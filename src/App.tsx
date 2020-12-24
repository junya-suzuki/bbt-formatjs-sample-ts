import * as React from 'react';
import { IntlProvider } from "react-intl";
import Home from "./components/Home";

type Props = {
  locale: string,
  messages: any
}

const App: React.FC<Props> = (props) => {
  return (
    <IntlProvider
      locale={props.locale}
      defaultLocale="en"
      messages={props.messages}>
      <Home name="Suzuki" />
    </IntlProvider>
  );
}

export default App;
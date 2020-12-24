import React from "react";
import { FormattedMessage, useIntl, injectIntl } from "react-intl";

type Props = {
  name: string
}

const Home: React.FC<Props> = (props) => {
  const intl = useIntl();
  return (
    <section>
      <header>
        <div>
          <FormattedMessage
            defaultMessage="Get Started"
            description="header message" />
        </div>
      </header>
      <ul>
        <li>
          <button>
            <FormattedMessage
              defaultMessage="Delete user {name}"
              description="Delete button"
              values={{
                name: props.name,
              }}
            />
          </button>
        </li>
      </ul>
    </section>
  );
}

export default Home;
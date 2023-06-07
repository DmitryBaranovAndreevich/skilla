import BluButtonLayout from '../blueButtonLayout';
import { ReactComponent as PayButtonIcon } from '../../../assets/button/payButton-icon.svg';
import styles from './payButton.module.css';

const PayButton = ({ ...props }) => {
  return (
    <BluButtonLayout {...props} icon={<PayButtonIcon width="24" height="24" />}>
      Оплата
    </BluButtonLayout>
  );
};

export default PayButton;

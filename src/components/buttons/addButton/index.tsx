import BluButtonLayout from '../blueButtonLayout';
import styles from './addButton.module.css';
import { ReactComponent as AddIcon } from '../../../assets/button/addButton-icon.svg';

const AddButton = ({ ...props }) => {
  return (
    <BluButtonLayout {...props} icon={<AddIcon width="24" height="24" />}>
      Добавить заказ
    </BluButtonLayout>
  );
};

export default AddButton;

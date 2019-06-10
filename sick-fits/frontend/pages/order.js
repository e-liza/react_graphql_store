import SignInGate from '../components/SignInGate';
import Order from '../components/Order';

const OrderPage = props => (
  <div>
    <SignInGate>
      <Order id={props.query.id} />
    </SignInGate>
  </div>
);

export default OrderPage;

import SignInGate from '../components/SignInGate';
import OrderList from '../components/OrderList';

const OrderPage = props => (
  <div>
    <SignInGate>
      <OrderList />
    </SignInGate>
  </div>
);

export default OrderPage;

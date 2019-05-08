import CreateItem from '../components/CreateItem';
import SignInGate from '../components/SignInGate';

const Sell = props => (
  <div>
    <SignInGate>
      <CreateItem />
    </SignInGate>
  </div>
);

export default Sell;

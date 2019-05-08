import SignInGate from '../components/SignInGate';
import Permissions from '../components/Permissions';

const PermissionsPage = props => (
  <div>
    <SignInGate>
      <Permissions />
    </SignInGate>
  </div>
);

export default PermissionsPage;

// @ts-expect-error no defs
import { MuiTest } from '@jvla/mui-test-pkg';
// @ts-expect-error no defs
import { ContextTest, useContextTest } from '@jvla/context-test-pkg';
export function App() {
  return (
    <ContextTest>
      <MuiTest>
        <ConnectedComponent />
      </MuiTest>
    </ContextTest>
  );
}

const ConnectedComponent = () => {
  const { active } = useContextTest();
  return (
    <div>
      {active.get() ? 'active' : 'inactive'}
      <br />
      <button onClick={() => active.set(!active.get())}>Toggle</button>
    </div>
  );
};

export default App;

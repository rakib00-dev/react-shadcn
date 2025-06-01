import EngineersAcademicCare from './EngineersAcademicCare';
import { ReducerHook } from './useReducerHook/ReducerHook';
import { useString } from './useCustomHook/CustomHook';

function App() {
  const value = useString('asadsff');
  console.log(value);

  return (
    <>
      <ReducerHook />
      {/* <EngineersAcademicCare /> */}
    </>
  );
}

export default App;

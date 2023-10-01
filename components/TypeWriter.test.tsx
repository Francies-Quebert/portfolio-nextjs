import Typewriter from "./TypeWriter";
import { render } from "@testing-library/react";

describe('TypeWriter', () => {
  it('renders correctly', () => {
    const { container } = render(<Typewriter text="hello" delay={10}/>);
    expect(container).toMatchSnapshot();
  });
});
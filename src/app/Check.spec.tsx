import './mock';

import Check from '@/app/Check';
import { act, fireEvent, render, screen } from '@testing-library/react';


// Function to see what's in <head> styles. Seems that MUI injects the styles here.
const getElementStyleFromHead = (element: HTMLElement) => {
  const sourceElementClassNames = [...element.classList.values()]; // get all the classNames for source element
  const styleTags = new DOMParser()
    .parseFromString(document.head.innerHTML, 'text/html')
    .querySelectorAll('style'); // parse all style tags in head
  const styleTagsArray = [...styleTags.values()]; // convert NodeList to array
  const elementStyles = styleTagsArray.filter((style) =>
    sourceElementClassNames.some((className) =>
      style.innerHTML?.includes(className),
    ),
  ); // filter all matching classNames between sourceElementClassNames and the style tag

  return elementStyles.map((item) => item.innerHTML).join(''); // join all classes and parse it as one css string
};

test('Test', () => {
  global.innerWidth = 500;
  // Trigger the window resize event.
  global.dispatchEvent(new Event('resize'));

  render(<Check/>)

  const checkElement = screen.getByTestId('check-element')
  screen.debug(checkElement);

  // Shows styles applied to the "sx" Props but not related to media-queries
  const styles = getComputedStyle(checkElement);
  console.log(styles)

  // Shows Styles to the "sx" prop and classes
  const headStyles = getElementStyleFromHead(checkElement)
  console.log(headStyles)

  // These do not pass
  // expect(checkElement).toHaveStyle('background-color: red');
  // expect(checkElement).toHaveStyle('background-color: blue');

  // Pass
  expect(checkElement).toHaveStyle('margin-left: 2px');
})
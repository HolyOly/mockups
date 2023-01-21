import { ReactComponent as ColorSvg } from '../assets/svg/color.svg';
import { ReactComponent as PeopleSvg } from '../assets/svg/people.svg';
import { ReactComponent as StyleSvg } from '../assets/svg/style.svg';
import { Color } from '../components/filters/items/color/color';
import '../style-lib/ui_lib.css';

const colorObject = ['black', 'gray', 'brown', 'green', 'red'];

export const filtersData: IFilter[] = [
  {
    icon: (
      <div className="filter-logo">
        <ColorSvg></ColorSvg>
      </div>
    ),
    name: 'Color',
    params: (
      <div className="filter__items">
        {colorObject.map((color, index) => (
          <Color color={color} key={index}></Color>
        ))}
      </div>
    ),
  },
  {
    icon: (
      <div className="filter-logo">
        <PeopleSvg></PeopleSvg>
      </div>
    ),
    name: 'People',
    params: <div>person</div>,
  },
  {
    icon: (
      <div className="filter-logo">
        <StyleSvg></StyleSvg>
      </div>
    ),
    name: 'Style',
    params: <div>style</div>,
  },
];

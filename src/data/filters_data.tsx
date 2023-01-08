import { ReactComponent as ColorSvg } from '../assets/svg/color.svg';
import { ReactComponent as PeopleSvg } from '../assets/svg/people.svg';
import { ReactComponent as StyleSvg } from '../assets/svg/style.svg';

export const filtersData: IFilter[] = [
  {
    icon: (
      <div className="filter-logo">
        <ColorSvg></ColorSvg>
      </div>
    ),
    name: 'Color',
    params: <div></div>,
  },
  {
    icon: (
      <div className="filter-logo">
        <PeopleSvg></PeopleSvg>
      </div>
    ),
    name: 'People',
    params: <div></div>,
  },
  {
    icon: (
      <div className="filter-logo">
        <StyleSvg></StyleSvg>
      </div>
    ),
    name: 'Style',
    params: <div></div>,
  },
];

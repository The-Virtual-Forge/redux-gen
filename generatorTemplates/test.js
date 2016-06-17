/* eslint no-unused-expressions: 0 */
import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';

import <%= nameUpper %> from
    '../../app/components/<%= nameUpper %>/<%= nameUpper %>.js';

const setup = () => ({ wrapper: shallow(<<%= nameUpper %> />) });

describe('<%= nameUpper %> component', () => {
    it('should do something');
});

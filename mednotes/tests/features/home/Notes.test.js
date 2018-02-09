import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Notes } from 'src/features/home/Notes';

describe('home/Notes', () => {
  it('renders node with correct class name', () => {
    const props = {
      home: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <Notes {...props} />
    );

    expect(
      renderedComponent.find('.home-notes').getElement()
    ).to.exist;
  });
});

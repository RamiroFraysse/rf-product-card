import React from 'react';
import rendered from 'react-test-renderer';
import { ProductTitle, ProductCard } from '../../src/components';
import { product1 } from '../data/products';

describe('ProductTitle', () => {
  test('should render the component with the custom title', () => {
    const wrapper = rendered.create(<ProductTitle title="Custom Product" />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
  test('shold render the component with the name of the product', () => {
    const wrapper = rendered.create(
      <ProductCard product={product1}>{() => <ProductTitle />}</ProductCard>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});

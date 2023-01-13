import React from 'react';
import rendered from 'react-test-renderer';
import { ProductImage, ProductCard } from '../../src/components';
import { product2 } from '../data/products';

describe('ProductImage', () => {
  test('should render the component with the custom image', () => {
    const wrapper = rendered.create(<ProductImage img="htttps://hola.jpg" />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
  test('shold render the component with the image of the product', () => {
    const wrapper = rendered.create(
      <ProductCard product={product2}>{() => <ProductImage />}</ProductCard>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});

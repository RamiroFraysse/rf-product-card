import React from 'react';
import rendered from 'react-test-renderer';
import { ProductCard } from '../../src/components';
import { product1 } from '../data/products';

const { act } = rendered;

describe('ProductCard', () => {
  test('should render the component correctly', () => {
    const wrapper = rendered.create(
      <ProductCard product={product1}>
        {() => <h1>Product Cardu</h1>}
      </ProductCard>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
  test('should increment the counter', () => {
    const wrapper = rendered.create(
      <ProductCard product={product1}>
        {({ count, increaseBy }) => (
          <>
            <h1>ProductCard</h1>
            <span>{count}</span>
            <button onClick={() => increaseBy(1)}></button>
          </>
        )}
      </ProductCard>
    );
    let tree = wrapper.toJSON();
    console.log(tree);

    expect(tree).toMatchSnapshot();
    act(() => {
      (tree as any).children[2].props.onClick();
    });
    tree = wrapper.toJSON();
    expect((tree as any).children[1].children[0]).toBe('1');
  });
});

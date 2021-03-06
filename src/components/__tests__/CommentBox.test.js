import React from 'react';
import { mount } from 'enzyme';
import Root from 'Root';
import CommentBox from 'components/CommentBox';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducers from 'reducers';

// mount is used to get the fullDom test

let wrapped;

beforeEach ( () => {
    wrapped = mount(
      <Root>
        <CommentBox />
      </Root> 
    );
});

afterEach(() => {
    wrapped.unmount();
});

it('has a text area and a button', () => {
    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(1);
});


describe('the text area', () => {
    beforeEach(() => {
        wrapped.find('textarea').simulate('change', {
        target: {value: 'new comment'}
        });
        wrapped.update();
    });
    it('has a text area that users can type in', () => {
        expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
    });
    
    it('cleans a text area when submited', () => {
        wrapped.find('form').simulate('submit', {
        });
        wrapped.update();
        expect(wrapped.find('textarea').prop('value')).toEqual('');
    });
})
import { shallowMount } from '@vue/test-utils';
import Main from '@/components/Main.vue';

const wrapper = shallowMount(Main);
describe('Main.vue', () => {
  it('렌더링 완료.', () => {
      // const wrapper = shallowMount(Main);
      // console.log("--->", wrapper.html());
  });

  test('submit test', async () => {
    const $submitBtn = wrapper.find('button.submit');

    const GIVEN_INPUT = '1234';
    const EXPEXTED_RESULT = '3412';

    wrapper.setData({ inputText: GIVEN_INPUT });

    await $submitBtn.trigger('click');
    await $submitBtn.trigger('click');

    expect(wrapper.text()).toContain(EXPEXTED_RESULT);
  });

});

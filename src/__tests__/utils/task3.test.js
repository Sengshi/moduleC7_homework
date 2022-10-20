import { revertString } from "../../utils/task3";

test('test revert string', () => {
    expect(revertString("abc")).toBe("cba");
});

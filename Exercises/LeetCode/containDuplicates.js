const array = [1, 2, 3, 4, 4]

const findDuplicates = (nums) => {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (i !== j) {
                if (nums[i] === nums[j]) {
                    return true
                }
            }
        }

    }
    return false

}
// findDuplicates(array)

const res = findDuplicates(array)
console.log(res)

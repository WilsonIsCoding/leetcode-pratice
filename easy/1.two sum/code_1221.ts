function twoSum(nums: number[], target: number): number[] {
    let mp = new Map()
    for(let i = 0; i < nums.length; i++){
        let diff:number = target-nums[i]
        if(mp.has(diff)){
            return [mp.get(diff),i]
        }
        mp.set(nums[i],i)
    }
};
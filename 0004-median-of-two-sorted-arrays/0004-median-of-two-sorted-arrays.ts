function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    // Merge the two arrays
    const merged = [...nums1, ...nums2].sort((a, b) => a - b);
    const n = merged.length;
    // If odd, return the middle element
    if (n % 2 === 1) {
        return merged[Math.floor(n / 2)];
    }
    // If even, return the average of the two middle elements
    return (merged[n / 2 - 1] + merged[n / 2]) / 2;
}
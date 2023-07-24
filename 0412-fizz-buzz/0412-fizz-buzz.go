func fizzBuzz(n int) []string {
    var array []string

	for i := 1; i <= n; i++ {
		if i%3 == 0 && i%5 == 0 {
			array = append(array, "FizzBuzz")
		} else if i%3 == 0 {
			array = append(array, "Fizz")
		} else if i%5 == 0 {
			array = append(array, "Buzz")
		} else {
			array = append(array, strconv.Itoa(i))
		}
	}

	return array
}
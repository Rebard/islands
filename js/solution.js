(function (root) {
    var WATER = root.SHRI_ISLANDS.WATER;
    var ISLAND = root.SHRI_ISLANDS.ISLAND;

    /**
     * Функция находит кол-во островов на карте
     * ВАЖНО! Сигнатуру функции изменять нельзя!
     *
     * @param {number[][]} map карта островов представленная двумерной матрицей чисел
     * @returns {number} кол-во островов
     */
	 function del(mas, i, j){
		mas[i][j] = 0;
		if(j < mas[0].length - 1){
			if(mas[i][j + 1] == 1)
				del(mas, i, j + 1);
		}
		if(j - 1 >= 0){
			if(mas[i][j - 1] == 1)
				del(mas, i, j - 1);
		}
		if(i < mas.length - 1){
			if(mas[i+1][j] == 1)
				del(mas,i+1,j);
		}
		if(i - 1 >= 0){
			if(mas[i-1][j] == 1)
				del(mas, i-1, j);
		}
	}	
    function solution(map) {
		let number = map.map(function(arr){
			let arrCopy = [];
			for(let i=0;i<arr.length;i++)
				arrCopy[i] = arr[i];
			return arrCopy;
		});
		let m = map.length;
		let n = map[0].length;
		let island = 0;
		for(let i = 0; i < m; i++){
			for(let j = 0; j < n; j++){
				if(number[i][j] == 1){
					island++;
					del(number,i,j);
				}
			}
		}
     return island;
    }

    root.SHRI_ISLANDS.solution = solution;
})(this);

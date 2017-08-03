
import 'React' from react;
import 'Axios' from axios;

var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=7a94e869a1c84206a380fd6b5a697ba0";


const helpers = {
	queryApi: function(subject, startDate, endDate){
		return axios.get(queryURL, {
			params: {
				subject: subject,
				startDate: startDate,
				endDate: endDate
			};
		});
	};

	saveArticles: function(article){
		return axios.post('/save', article);
	};
};
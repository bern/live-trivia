package api

type Question struct {
	Countdown int64 `json:"countdown"`
	Question string `json:"question"`
	Answers []string `json:"answers"`
	CorrectAnswer int64 `json:"correct_answer"`
}

type DBQuestion struct {
	ID string `json:"id"`
	Countdown int64 `json:"countdown"`
	Question string `json:"question"`
	Answers []string `json:"answers"`
	CorrectAnswer int64 `json:"correct_answer"`
}

func questionToDBQuestion(q Question, id string) DBQuestion {
	return DBQuestion{
		ID: id,
		Countdown: q.Countdown,
		Question: q.Question,
		Answers: q.Answers,
		CorrectAnswer: q.CorrectAnswer,
	}
}
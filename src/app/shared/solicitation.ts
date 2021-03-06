export class Solicitation {
  constructor (
        public solNum: String,
        public title: String,
        public url: String,
        public predictions: {RED: Number, GREEN: Number},
        public reviewRec: Boolean,
        public numDocs: String,
        public eitLikelihood: String,
        public date: Date,
        public agency: String,
        public office: String,
        public contact: String,
        public position: String,
        public reviewStatus: Boolean,
        public noticeType: String,
        public parseStatus: [{name: String, status: String}]
    ) {}
}

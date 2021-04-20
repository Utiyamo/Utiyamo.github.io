export default class Countdown{
    constructor(futureDate){
        this.futureDate = futureDate;
    }   

    get _atualDate() {
        return new Date();
    }

    get _futureDate(){
        return new Date(this.futureDate);
    }

    get _timeStampDiff(){
        return this._futureDate.getTime() - this._atualDate.getTime();
    }

    get _Days(){
        return Math.floor(this._timeStampDiff / (24 * 60 * 60 * 1000));
    }

    get _Hours(){
        return Math.floor(this._timeStampDiff / (60 * 60 * 1000));
    }

    get _Minutes(){
        return Math.floor(this._timeStampDiff / (60 * 1000));
    }

    get _Seconds(){
        return Math.floor(this._timeStampDiff / (1000));
    }

    get _Total(){
        const days = this._Days;
        const hours = this._Hours % 24;
        const minutes = this._Minutes % 60;
        const seconds = this._Seconds % 60;

        return [days, hours, minutes, seconds];
    }
}
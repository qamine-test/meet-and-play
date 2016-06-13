import { Injectable } from '@angular/core';
import {Letter} from '../../../models/letter.model';

/**
 * This class provides the News service with methods to read all news
 */
@Injectable()
export class AlphabetService {

  letters: Letter[] = [
    {letter: "А", imageUrl: "assets/alphabet/azbuka.jpeg"},
    {letter: "Б", imageUrl: "assets/alphabet/body.jpg"},
    {letter: "В", imageUrl: "assets/alphabet/vanya.jpeg"},
    {letter: "Г", imageUrl: "assets/alphabet/gorshok.jpg"},
    {letter: "Д", imageUrl: "assets/alphabet/dyrka.jpg"},
    {letter: "Е", imageUrl: "assets/alphabet/enot.jpg"},
    {letter: "Ж", imageUrl: "assets/alphabet/jele.jpg"},
    {letter: "З", imageUrl: "assets/alphabet/zaichik.jpg"},
    {letter: "И", imageUrl: "assets/alphabet/igrushki.jpg"},
    {letter: "К", imageUrl: "assets/alphabet/ksilofon.jpg"},
    {letter: "Л", imageUrl: "assets/alphabet/ledenec.jpg"},
    {letter: "М", imageUrl: "assets/alphabet/manej.jpg"},
    {letter: "Н", imageUrl: "assets/alphabet/nimbler.jpg"},
    {letter: "О", imageUrl: "assets/alphabet/omlet.jpg"},
    {letter: "П", imageUrl: "assets/alphabet/poilnik.jpeg"},
    {letter: "Р", imageUrl: "assets/alphabet/raspashonka.jpg"},
    {letter: "С", imageUrl: "assets/alphabet/sorter.jpg"},
    {letter: "Т", imageUrl: "assets/alphabet/traktor.jpg"},
    {letter: "У", imageUrl: "assets/alphabet/umka.jpg"},
    {letter: "Ф", imageUrl: "assets/alphabet/fiksiki.jpg"},
    {letter: "Х", imageUrl: "assets/alphabet/hodunki.png"},
    {letter: "Ц", imageUrl: "assets/alphabet/cokotuha.png"},
    {letter: "Ч", imageUrl: "assets/alphabet/cheburashka.jpg"},
    {letter: "Ш", imageUrl: "assets/alphabet/shalost.jpeg"},
    {letter: "Щ", imageUrl: "assets/alphabet/shekotka.jpeg"},
    {letter: "Э", imageUrl: "assets/alphabet/ekskavator.jpg"},
    {letter: "Ю", imageUrl: "assets/alphabet/ula.jpg"},
    {letter: "Я", imageUrl: "assets/alphabet/jagoda.jpg"}
  ];

  get(): Letter[] {
    return this.letters;
  }
}

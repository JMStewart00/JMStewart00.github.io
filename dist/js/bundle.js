(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

// Scroll Reveal instructions

window.sr = ScrollReveal();
sr.reveal('.aboutTitle', { duration: 2000 }, 500);
sr.reveal('.aboutRuler', { duration: 2000 }, 500);
sr.reveal('.introTitle', { duration: 2000 }, 500);
sr.reveal('.overview', { duration: 2000 }, 500);
sr.reveal('.portfolio-box', { duration: 2000 }, 500);

// Smooth Scroll on href clicks

$(document).ready(function () {
    $('a[href^="#"]').on('click', function (event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });
});

// Calling sticky.js and for the sticky navbar.

$(document).ready(function () {
    $("nav").sticky({ topSpacing: 0 });
});

$("#accordion").accordion({ collapsible: true, active: false });
$(document).ready(function () {
    $('.accordion-toggle').on('click', function (event) {
        // create accordion variables
        var accordion = $(this);
        var accordionContent = accordion.next('.accordion-content');
    });
});

// popover function

$(function () {
    $('[data-toggle="popover"]').popover({ trigger: 'hover' });
});

},{}]},{},[1]);

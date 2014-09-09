'use strict';

angular.module('scaredycatApp')
	.controller('GameCtrl', function ($scope, $location, $timeout, $interval, usernameFactory, deck) {
		function calculateScore(hand) {
			var score = 0;
			for (var i = 0; i < hand.length; i++) {
				score += parseInt(hand[i].replace("bird", ""));
			}
			return score;
		}
		if (usernameFactory.getUsername() === "" || usernameFactory.getUsername() === undefined) {
			$location.path("/");
		} else {
			$scope.isGameFinished = function () {
				if ($scope.scarecrowCards.length === 6) {
					return true;
				}
			};
			$scope.scarecrowCards = [];
			$scope.username1 = usernameFactory.getUsername();
			$scope.players = [{
				name: $scope.username1,
				hand: [],
				score: 0
			}, {
				name: "Pablocera",
				hand: [],
				score: 0
			}];
			$scope.selectedCard = "back";
			var turn = 0;
			$scope.playerTurn = $scope.players[turn].name;
			$scope.getNextCard = function () {
				$scope.playerTurn = $scope.players[turn].name;
				if ($scope.selectedCard === "back" && $scope.scarecrowCards.length < 6) {
					$scope.selectedCard = deck.getNextCard();
					$timeout(function () {
						if ($scope.selectedCard.indexOf("scarecrow") > -1) {
							$scope.scarecrowCards.push($scope.selectedCard);
						} else if ($scope.selectedCard.indexOf("cat") > -1) {
							deck.addCard($scope.selectedCard);
							deck.addCard($scope.players[turn].hand);
							$scope.players[turn].hand = [];
						} else {
							$scope.players[turn].hand.push($scope.selectedCard);
						}
						$scope.selectedCard = "back";
						var score = calculateScore($scope.players[turn].hand);
						$scope.players[turn].score = score;
						turn = (turn + 1 < $scope.players.length) ? turn + 1 : 0;
					}, 1);
				}
			};
			$scope.saveScore = function () {
				usernameFactory.setScore($scope.players[0].score);
				$location.path("/results");
			};
		}
	});